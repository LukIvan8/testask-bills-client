import React from 'react';
import {Form, FormikValues} from "formik";
import {Select} from "../../common/select";
import {Input} from "../../common/input";
import {ListLayout} from "../../common/list-layout";
import {Stack} from "../../common/stack";
import {Button} from "../../common/button";

interface PropTypes {
  transactionTypes: { value: string, label: string }[]
  providers: ProviderType
  values: any
  handleChange?: any
  setFieldValue: Function
}

interface ProviderType {
  [key: string]: { value: string; label: string }[];
}

const Component = (props: PropTypes) => {
  return (
    <Form>
      <ListLayout>
        <Select optionList={props.transactionTypes} label="bill.formLabel.type" name="transactionType"/>
        {props.values.transactionType !== "" ? (
          <Select name="provider" optionList={props.providers[props.values.transactionType]}
                  label="bill.formLabel.provider"/>
        ) : (<Select name="provider" optionList={[]} label="bill.formLabel.provider"></Select>)}
        <Input name="privateAccount" label="bill.formLabel.account" placeholder="bill.formPlaceholder.account"/>
        <Input name="paymentAmount" label="bill.formLabel.payment" placeholder="bill.formPlaceholder.payment"/>
      </ListLayout>
      <Stack width="90" justifyContent="space-between" gap={1}>
        <Button fill="outline" label="bill.formButton.cancel"/>
        <Button type="submit" label="bill.formButton.create"/>
      </Stack>
    </Form>
  );
};
export default Component;