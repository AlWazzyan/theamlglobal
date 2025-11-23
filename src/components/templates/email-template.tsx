import axios from "axios";
import * as React from "react";
import { Section, Row, Text, Hr, Column } from "@react-email/components";
import { error } from "console";

export interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  ID: string;
  country: string;
  section: string;
  message?: string;
}

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
export const EmailTemplate: any = ({
  name,
  email,
  phone,
  ID,
  country,
  section,
  message,
}: any) => {
  const items = [
    { name: "Name", value: name },
    { name: "Email", value: email },
    { name: "Phone", value: phone },
    { name: "ID", value: ID },
    { name: "Country", value: country },
    { name: "Section", value: section },
    { name: "Message", value: message },
  ];

  return (
    <Section className="my-[16px] grid grid-cols-2">
      <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
        You have a new client.
      </Text>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <Hr className="mx-0 my-[24px] w-full border border-solid !border-gray-300" />
            <Section>
              <Row>
                <Column className="w-[90%]">
                  <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                    {item.name}
                  </Text>
                  <Text className="m-0 mt-[8px] text-[16px] leading-[24px] text-gray-500">
                    {item.value}
                  </Text>
                </Column>
              </Row>
            </Section>
          </div>
        );
      })}
    </Section>
  );
};

export const sendMail = async ({ ...data }: EmailTemplateProps) => {
  return new Promise(async (resolve, reject) => {
    console.log(data);
    await axios
      .post("/api/send-mail", data)
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};
