import React from "react";

import { checkUser } from "@/lib/check-user";

export default function Navbar() {
  const user = checkUser();

  return <div>Navbar</div>;
}
