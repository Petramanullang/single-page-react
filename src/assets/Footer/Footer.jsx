import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white font-bolder hover:text-red-400">
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white font-bolder hover:text-red-400">
              License
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#"
              className="text-white font-bolder hover:text-red-400">
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal text-white">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}
