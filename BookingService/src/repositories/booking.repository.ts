import { Booking, Prisma } from "../../generated/prisma/client";
import { prismaClient } from "../../prisma/client";

export async function createBooking(bookingInput: Prisma.BookingCreateInput) {
  const booking = prismaClient.booking.create({
    data: bookingInput,
  });

  return booking;
}

export async function createIdempotencyKey(key: string, booking?: Booking) {
  const idempotencyKey = await prismaClient.idempotencyKey.create({
    data: {
      key,
      booking,
    },
  });

  return idempotencyKey;
}

// 1. booking   => idempotencyKey
