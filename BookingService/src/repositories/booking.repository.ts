import { Prisma } from "../../generated/prisma/client";
import { prismaClient } from "../../prisma/client";

export async function createBooking(bookingInput: Prisma.BookingCreateInput) {
  const booking = prismaClient.booking.create({
    data: bookingInput,
  });

  return booking;
}
