"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import ActionsBar from "./ActionsBar";
import FilterByUserSelect from "./FilterByUserSelect";
import { User } from "@prisma/client";

const ActionsAccordion = ({ authors }: { authors: User[] }) => {
  return (
    <Accordion isCompact>
      <AccordionItem key="1" aria-label="Actions" title="Actions">
        <ActionsBar />
        <FilterByUserSelect authors={authors} />
      </AccordionItem>
    </Accordion>
  );
};

export default ActionsAccordion;
