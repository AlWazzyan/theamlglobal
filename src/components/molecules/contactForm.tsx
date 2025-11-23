"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { IState } from "@/types/types";
import { Button } from "../ui/button";
import { services } from "@/lib/data";
import { Textarea } from "../ui/textarea";
import { sendMail } from "../templates/email-template";
import useDisclosure from "@/hooks/useDisclosure";
import { ToastContainer, toast as Toastify } from "react-toastify";
import { toastOptions } from "@/lib/utils";

const formSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email()
    .min(1, {
      message: "Email is too short",
    })
    .max(50, { message: "Email is too long" }),
  name: z
    .string({ message: "Name is required" })
    .min(1, {
      message: "Name is too short",
    })
    .max(50, { message: "Name is too long" }),
  section: z
    .string({ message: "Section is required" })
    .min(1, {
      message: "Section is too short",
    })
    .max(50, { message: "Address is too long" }),
  message: z.string({ message: "Section is required" }).optional(),
  country: z
    .string({ message: "Country is required" })
    .min(1, {
      message: "Invalid Country",
    })
    .max(50, { message: "Invalid Country" }),
  number: z
    .string({ message: "Phone number is required" })
    .min(1, {
      message: "Invalid Phone Number",
    })
    .max(15, { message: "Invalid Phone Number" }),
  id: z
    .string({ message: "Identification number is required" })
    .min(10, {
      message: "Invalid Identification Number",
    })
    .max(15, { message: "Invalid Identification Number" }),
});
export default function ContactForm({}: // setState,
// state,
{
  // state: IState;
  // setState: React.Dispatch<React.SetStateAction<IState>>;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const error = form.formState.errors;

  const submitForm = async (data: any) => {
    const isSubmitted = localStorage.getItem("isSubmitted");
    if (isSubmitted == data.email) {
      Toastify.error("You have submitted a query already", toastOptions);
      return;
    }
    onOpen();
    await sendMail({
      name: data.name,
      email: data.email,
      section: data.section,
      message: data.message,
      country: data.country,
      ID: data.id,
      phone: data.number,
    })
      .then((res) => {
        localStorage.setItem("isSubmitted", data.email);
        Toastify("Your message has been sent. You would be reached out to soon.", toastOptions);
        form.reset();
        onClose();
      })
      .catch((err) => {
        Toastify.error(err ?? "Failed to reprocess order", toastOptions);
        onClose();
      });
    console.log(data);
  };
  const [countries, setCountries] = React.useState<undefined | any[]>();

  React.useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all?fields=name,flags`)
      .then((res) => {
        console.log(res);
        const sortedData = [...res.data].sort((a, b) => a.name.common.localeCompare(b.name.common));
        console.log(sortedData);
        console.log(setCountries(sortedData));
      })
      .catch((err) => console.log(err));
  }, []);

  const _services = services.map((item) => {
    return { value: item.name, name: item.header };
  });

  console.log(_services);

  return (
    <div className="font-maven py-8 md:py-20 w-full">
      <h1 className="text-center font-semibold text-neutral-800 text-3xl sm:text-5xl z-10 relative">
        Contact us
      </h1>
      <p className="text-center text-gray-400 mt-2 md:mt-6 max-w-2xl mx-auto">
        Fill this information and our support team would reach out to you immediately or within
        maximum of 24 hours.
      </p>
      <div className="w-full mt-10 md:mt-8 ">
        <Form {...form}>
          <form
            className="sm:grid flex flex-col   grid-cols-2 gap-4"
            onSubmit={form.handleSubmit(submitForm)}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full ">
                  <FormLabel className="font-normal">Name</FormLabel>
                  <FormControl>
                    <Input
                      error={error.name ? true : false}
                      className="w-full !border-gray-300   "
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Email</FormLabel>
                  <FormControl>
                    <Input
                      error={error.email ? true : false}
                      className="w-full !border-gray-300   "
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">Phone</FormLabel>
                  <FormControl>
                    <Input
                      error={error.number ? true : false}
                      className="w-full !border-gray-300   "
                      placeholder="*** *** *** ***"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-normal">
                    Identification Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      error={error.id ? true : false}
                      className="w-full !border-gray-300   "
                      placeholder="*** *** *** ***"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormLabel className="font-normal">Country</FormLabel>
                    <FormControl className={``}>
                      <SelectTrigger
                        className=" border w-full"
                        error={error.country ? true : false}
                      >
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {countries &&
                        countries.map((item: any, i: number) => {
                          return (
                            <SelectItem key={i} value={item.name.common}>
                              {item.name.common}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="section"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormLabel className="font-normal">Section</FormLabel>
                    <FormControl className={``}>
                      <SelectTrigger
                        className=" border w-full"
                        error={error.section ? true : false}
                      >
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white">
                      {_services &&
                        _services.map((item: any, i: number) => {
                          return (
                            <SelectItem key={i} value={item?.value}>
                              {item?.name}
                            </SelectItem>
                          );
                        })}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel className="font-normal">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      error={error.message ? true : false}
                      className="w-full !border-gray-300 min-h-[10rem]   "
                      placeholder="Additional information can be written here."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" col-span-2  flex items-center justify-center">
              <Button className=" mx-auto mt-6">
                {!isOpen && (
                  <div className="flex items-center justify-center">
                    Submit
                    <IoIosArrowRoundForward size="2rem" />
                  </div>
                )}
                {isOpen && <p>Processing....</p>}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
