"use client";

import { createProject } from "@/actions/create-project";
import { ErrorAlert } from "@/components/common/alerts/ErrorAlert";
import { SuccessAlert } from "@/components/common/alerts/SuccessAlert";
import RichTextEditor from "@/components/common/form/RichTextEditor";
import { ProjectSchema } from "@/components/schemas/schemas";
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
import { cn } from "@/lib/utils";
import {
  PROJECT_CATEGORIES,
  PROJECT_SERVICES,
  PROJECT_TECHNOLOGIES,
} from "@/utils/data/projects/formdata";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Tag, TagInput } from "emblor";
import { CalendarIcon } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import MultiSelectTest from "../common/form/MultiSelect";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ProjectCategoryEnum } from "@/types/util.types";

type Props = {};

export const CreateProjectForm = (props: Props) => {
  const [isPending, startTransaction] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [galleryImages, setGalleryImages] = useState<Tag[]>([]);

  const form = useForm<zod.infer<typeof ProjectSchema>>({
    resolver: zodResolver(ProjectSchema),
    defaultValues: {
      title: "", //
      description: "", //
      url: "", ///
      repoUrl: "", //
      coverImage: "", //
      coverImageBg: "", //
      technologies: [], //
      category: "WEBSITE_DEVELOPMENT", //
      services: [], //
      projectNature: "Featured",
      client: "",
      clientId: "",
      status: "", //
      imageGallery: [], //
      startDate: new Date(), //
      endDate: new Date(), //
      content: "", //
      budget: 0,
      estimatedHours: 0,
      internalNotes: "",
      clientFeedback: "",
      // isActive: true,
    },
  });

  const handleGalleryChange = (
    newTags: Tag[] | ((prevState: Tag[]) => Tag[])
  ) => {
    if (typeof newTags === "function") {
      setGalleryImages((prevState) => {
        const updatedTags = newTags(prevState);
        const imageGallery = updatedTags.map((tag) => tag.text);
        form.setValue("imageGallery", imageGallery);
        return updatedTags;
      });
    } else {
      setGalleryImages(newTags);
      const imageGallery = newTags.map((tag) => tag.text);
      form.setValue("imageGallery", imageGallery);
    }
  };

  const onSubmit = (values: zod.infer<typeof ProjectSchema>) => {
    setError("");
    setSuccess("");

    startTransaction(() => {
      createProject(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
  return (
    <div className=" h-full flex items-center justify-center w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="grid grid-cols-2 gap-5">
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
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Link</FormLabel>
                    <FormControl>
                      <Input
                        className="py-10 px-5 text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="www.example.com/"
                        type="url"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repoUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repository URL</FormLabel>
                    <FormControl>
                      <Input
                        className="py-10 px-5 text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="www.github.com/AlistairHeus/repo.git"
                        type="text"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div className=" w-full grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal text-white/80 bg-black hover:bg-black hover:text-white rounded-md border",
                              !field.value && "text-black"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          className="bg-black text-white"
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal text-white/80 bg-black hover:bg-black hover:text-white  rounded-md border",
                              !field.value && "text-black"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          className="bg-black text-white"
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="technologies"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="leading-none">Technologies</FormLabel>
                    <FormControl>
                      <MultiSelectTest
                        options={PROJECT_TECHNOLOGIES}
                        value={field.value}
                        setValue={field.onChange}
                        placeholder="Select technologies"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className=" text-white/80">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Object.values(ProjectCategoryEnum).map(
                              (category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              )
                            )}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full grid grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="leading-none">Services</FormLabel>
                    <FormControl>
                      <MultiSelectTest
                        options={PROJECT_SERVICES}
                        value={field.value}
                        setValue={field.onChange}
                        placeholder="Select services"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="leading-none">
                      Project Status
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className=" text-white/80">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="In Progress">
                              In Progress
                            </SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                            <SelectItem value="Archived">Archived</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="coverImage"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="leading-none">Cover Image</FormLabel>
                  <FormControl>
                    <Input
                      className="py-10 px-5 text-xl"
                      disabled={isPending}
                      {...field}
                      placeholder="cloudfront url"
                      type="text"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="leading-none">Client Name</FormLabel>
                  <FormControl>
                    <Input
                      className="py-10 px-5 text-xl"
                      disabled={isPending}
                      {...field}
                      placeholder="John Doe"
                      type="text"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="imageGallery"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="leading-none">Gallery</FormLabel>
                  <FormControl>
                    <TagInput
                      {...field}
                      placeholder="Enter a cloud url"
                      tags={galleryImages}
                      className="px-5 py-10 placeholder:text-white/30 text-xl"
                      setTags={(newTags) => handleGalleryChange(newTags)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="grid grid-cols-3 gap-5">
              <FormField
                control={form.control}
                name="projectNature"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="leading-none">Project Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className=" text-white/80">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Featured">Featured</SelectItem>
                            <SelectItem value="Work">Work</SelectItem>
                            <SelectItem value="Play">Play</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="leading-none">{`Budget(₹)`}</FormLabel>
                    <FormControl>
                      <Input
                        className="text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="cloudfront url"
                        type="number"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverImageBg"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="leading-none">
                      Cover Image Background
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="text-xl"
                        disabled={isPending}
                        {...field}
                        placeholder="cloudfront url"
                        type="color"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="leading-none">Archived</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className=" text-white/80">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="In Progress">
                            In Progress
                          </SelectItem>
                          <SelectItem value={true}>Active</SelectItem>
                          <SelectItem value={false}>Archived</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div> */}

          <div>
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <RichTextEditor
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <ErrorAlert message={error} />
          <SuccessAlert message={success} />

          <Button
            disabled={isPending}
            type="submit"
            className="px-16 py-10 rounded-full bg-black border-2 hover:bg-black"
          >
            Create Project
          </Button>
        </form>
      </Form>
    </div>
  );
};
