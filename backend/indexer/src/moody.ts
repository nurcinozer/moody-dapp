import { MoodUploaded as MoodUploadedEvent } from "../generated/Moody/Moody";
import { Mood } from "../generated/schema";

export function handleMoodUploaded(event: MoodUploadedEvent): void {
  let mood = new Mood(event.params.id.toString());
  mood.hash = event.params.hash;
  mood.message = event.params.message;
  mood.category = event.params.category;
  mood.date = event.params.date;
  mood.author = event.params.author;
  mood.createdAt = event.block.timestamp;
  mood.save();
}
