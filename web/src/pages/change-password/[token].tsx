import { Button } from '@chakra-ui/core';
import { Formik, Form } from 'formik';
import { NextPage } from 'next';
import React from 'react'
import { InputField } from '../../components/InputField';
import { Wrapper } from '../../components/Wrapper';


export const ChangePassword: NextPage<{token: string}> = ({}) => {
    return (
      <Wrapper variant={"small"}>
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { }) => {
          // const response = await login(values);
          // console.log(response);
          // if (response.data?.login.errors) {
          //   setErrors(toErrorMap(response.data.login.errors));
          // } else if (response.data?.login.user) {
          //   // It worked
          //   router.push("/");
          // }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              placeholder="Input your new password"
              label="Password"
              type="password"
            />

            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
    );
}

ChangePassword.getInitialProps = ({query}) => {
  return {
    token: query.token as string
  }
}

export default ChangePassword