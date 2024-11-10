'use server'

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function getUsers() {
  const users = await prisma.usuario.findMany()
  return users
}

export async function getJobs() {
  const jobs = await prisma.trabalho.findMany()
  return jobs
}