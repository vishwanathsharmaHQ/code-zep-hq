"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { ErrorAlert } from "@/components/common/alerts/ErrorAlert";
import { SuccessAlert } from "@/components/common/alerts/SuccessAlert";
import { ContactSchema } from "@/components/schemas/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getInTouch } from "@/actions/get-in-touch";
import CommonButton from "../buttons/CommonButton";

type Props = {};

const MinimalContactForm = (props: Props) => {
  const [isPending, startTransaction] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<zod.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      query: "",
    },
  });

  const onSubmit = (values: zod.infer<typeof ContactSchema>) => {
    setError("");
    setSuccess("");

    startTransaction(() => {
      getInTouch(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div className="w-full h-full flex justify-start">
      <div className="py-10 w-full lg:w-2/3 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <div className="grid lg:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="John Doe"
                        type="text"
                        className="py-10 px-5 text-xl"
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isPending}
                        {...field}
                        placeholder="john@email.com"
                        type="email"
                        className="py-10 px-5 text-xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="">
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={isPending}
                        {...field}
                        placeholder="Tell me something about your query"
                        className="py-10 px-5 text-xl min-h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2">
              <ErrorAlert message={error} />
              <SuccessAlert message={success} />
            </div>

            <CommonButton disabled={isPending} type="submit">
              Get in touch
            </CommonButton>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MinimalContactForm;
