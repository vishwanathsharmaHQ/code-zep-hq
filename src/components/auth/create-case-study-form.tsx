"use client";

import { ErrorAlert } from "@/components/common/alerts/ErrorAlert";
import { SuccessAlert } from "@/components/common/alerts/SuccessAlert";
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
import { AllProjectsProps } from "@/types/util.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { CaseStudySchema } from "../schemas/schemas";
import { InputTags } from "../ui/input-tags";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createCaseStudy } from "@/actions/create-case-study";

const CreateCaseStudyForm = ({ projects }: AllProjectsProps) => {
  const [isPending, startTransaction] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<zod.infer<typeof CaseStudySchema>>({
    resolver: zodResolver(CaseStudySchema),
    defaultValues: {
      projectId: "",
      title: "", //
      description: "", //
      showreel: "", //
      tagline: "", //
      colorPalette: ["#ffffff", "#000000"], //
    },
  });

  const onSubmit = (values: zod.infer<typeof CaseStudySchema>) => {
    setError("");
    setSuccess("");

    startTransaction(() => {
      createCaseStudy(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          // onSubmit={}
          className="w-full space-y-6"
        >
          {" "}
          <div className="w-full grid grid-cols-2 gap-5">
            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        className="py-10 px-5 text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="Creative Website"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        className="py-10 px-5 text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="Description"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4 w-full">
              <FormField
                control={form.control}
                name="tagline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tagline</FormLabel>
                    <FormControl>
                      <Input
                        className="py-10 px-5 text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="Creative Tagline"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="showreel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Showreel</FormLabel>
                    <FormControl>
                      <Input
                        className="py-10 px-5 text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="Showreel url"
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="projectId"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Project</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className=" text-white/80">
                        <SelectValue placeholder="Select Project" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {projects?.map((project) => (
                            <SelectItem
                              value={project.projectUniqueId}
                              key={project.projectUniqueId}
                            >
                              {project.title}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="">
            <FormField
              control={form.control}
              name="colorPalette"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Colors</FormLabel>
                  <FormControl>
                    <InputTags {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div>
            <FormField
              control={form.control}
              name="videos"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="leading-none">Video URLS</FormLabel>
                  <FormControl>
                    <TagInput
                      {...field}
                      placeholder="Enter a hex color code"
                      tags={colors}
                      className="px-5 py-10 placeholder:text-white/30 text-xl"
                      setTags={(newTags) => handleVideosChange(newTags)}
                      variant="primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}
          <ErrorAlert message={error} />
          <SuccessAlert message={success} />
          <Button
            disabled={isPending}
            type="submit"
            className="px-16 py-10 rounded-full bg-black border-2 hover:bg-black"
          >
            Create Case Study
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCaseStudyForm;
