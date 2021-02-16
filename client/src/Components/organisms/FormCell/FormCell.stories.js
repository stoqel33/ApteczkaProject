import React from "react";

import FormCell from "./FormCell";

export default {
  component: FormCell,
  title: "molecules/FormCell",
};

export const Normal = () => <FormCell type="text" />;
export const Warning = () => <FormCell type="text" errors />;
export const Amount = () => <FormCell type="number" />;
export const Date = () => <FormCell type="date" />;
