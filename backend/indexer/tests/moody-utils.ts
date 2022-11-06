import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { MoodUploaded } from "../generated/Moody/Moody"

export function createMoodUploadedEvent(
  id: BigInt,
  hash: string,
  message: string,
  category: string,
  date: string,
  author: Address
): MoodUploaded {
  let moodUploadedEvent = changetype<MoodUploaded>(newMockEvent())

  moodUploadedEvent.parameters = new Array()

  moodUploadedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  moodUploadedEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromString(hash))
  )
  moodUploadedEvent.parameters.push(
    new ethereum.EventParam("message", ethereum.Value.fromString(message))
  )
  moodUploadedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  moodUploadedEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  moodUploadedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return moodUploadedEvent
}
