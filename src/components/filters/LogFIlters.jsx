/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { RiArrowDownSLine, RiFilterFill } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const filters = [
  "Obtener",
  "Crear",
  "Actualizar",
  "Eliminar",
  "Restaurar",
  "Usuario",
];

const menuItems = filters.map((filter, index) => (
  <Menu.Item key={index}>
    {({ active }) => (
      <div
        className={classNames(
          active ? "bg-gray-200 text-gray-900" : "text-gray-700",
          "block w-full px-4 py-2 text-left text-sm hover:bg-gray-200"
        )}
      >
        <div className="flex justify-between cursor-pointer">{filter}</div>
      </div>
    )}
  </Menu.Item>
));

export default function FilterLogs() {
  return (
    <Menu as="div" className="relative inline-block text-left lg:ml-5">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md hover:bg-blue-400 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-50 hover:text-white">
          <RiFilterFill
            className="-mr-1 h-5 w-5 text-primary"
            aria-hidden="true"
          />
          Filter
          <RiArrowDownSLine
            className="-mr-1 h-5 w-5 text-primary"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none translate-x-20">
          <div className="py-1 ">
            <form method="POST" action="#">
              {menuItems}
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
