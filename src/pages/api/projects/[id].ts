import { NextApiHandler } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler: NextApiHandler = async (req, res) => {
  const id = parseInt(req.query.id as string);

  const project = await prisma.project.findUnique({ where: { id } });
  res.status(200).json(project);
};

export default handler;
