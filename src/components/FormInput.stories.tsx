import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { FormInput, FormInputProps } from "./FormInput";
import { Form, Formik } from "formik";

const NAME = "Label";

export default {
  title: "Components/FormInput",
  component: FormInput,
} as Meta;

const Template: Story<FormInputProps> = (args) => (
  <Formik initialValues={{ [NAME]: "" }} onSubmit={() => {}}>
    <Form>
      <FormInput {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});
Default.args = { name: NAME };

export const Email = Template.bind({});
Email.args = {
  name: NAME,
  type: "email",
};

export const Required = Template.bind({});
Required.args = {
  name: NAME,
  required: true,
};

export const Optional = Template.bind({});
Optional.args = {
  name: NAME,
  optional: true,
};

export const TextArea = Template.bind({});
TextArea.args = {
  name: NAME,
  as: "textarea",
};

export const Select = Template.bind({});
Select.args = {
  name: NAME,
  options: ["Option 1", "Option 2", "Option 3"],
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  name: NAME,
  width: "w-96",
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: "Custom!",
  name: NAME,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  name: NAME,
  noLabel: true,
};
