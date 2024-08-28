"use client";

import React, { useState, useTransition } from "react";
import * as zod from "zod";
import { CardWrapper } from "./card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../schemas/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ErrorAlert } from "../common/alerts/ErrorAlert";
import { SuccessAlert } from "../common/alerts/SuccessAlert";
import { login } from "@/actions/login";

type Props = {};

export const LoginForm = (props: Props) => {
  const [isPending, startTransaction] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<zod.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: zod.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransaction(async () => {
      try {
        const data = await login(values);

        if (data) {
          setError(data.error || "");
          setSuccess(data.success || "");
        } else {
          setError("An unexpected error occurred.");
        }
      } catch (error) {
        setError("An error occurred during login.");
      }
    });
  };
  return (
    <div className="border h-full w-full flex items-center justify-center">
      <CardWrapper
        headerLabel="Welcome back!"
        showSocial={false}
        backButtonHref="/"
        backButtonLabel="go back"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="john@email.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="*******"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ErrorAlert message={error} />
            <SuccessAlert message={success} />

            <Button disabled={isPending} type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};
