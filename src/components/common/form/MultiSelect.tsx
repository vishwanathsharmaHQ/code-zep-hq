"use client";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";
import { ProjectSelectInputType } from "@/types/util.types";

type MultiSelectProps = {
  value: string[];
  setValue: (value: string[]) => void;
  placeholder: string;
  options: ProjectSelectInputType[];
};

const MultiSelectTest = (props: MultiSelectProps) => {
  const { value, setValue, options } = props;
  return (
    <MultiSelector values={value} onValuesChange={setValue} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder={props.placeholder} />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList className="bg-black absolute">
          {options.map((option: ProjectSelectInputType, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default MultiSelectTest;
