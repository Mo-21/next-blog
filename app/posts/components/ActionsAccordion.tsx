"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import ActionsBar from "./ActionsBar";
import FilterByUserSelect from "./FilterByUserSelect";
import { User } from "@prisma/client";
import OrderBySelect from "./OrderBySelect";

const ActionsAccordion = ({ authors }: { authors: User[] }) => {
  return (
    <Accordion isCompact>
      <AccordionItem key="1" aria-label="Actions" title="Actions">
        <ActionsBar />
        <FilterByUserSelect authors={authors} />
        <OrderBySelect />
      </AccordionItem>
    </Accordion>
  );
};

export default ActionsAccordion;
