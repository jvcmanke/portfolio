import { NextApiHandler } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, res) => {
  const projects = await prisma.project.findMany();

  res.status(200).json(projects);
};

export default handler;
