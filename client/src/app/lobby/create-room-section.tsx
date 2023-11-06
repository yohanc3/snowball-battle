import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { createLobby } from "@/api/lobby";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Region } from "@hathora/hathora-cloud-sdk";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const REGIONS = Object.values(Region);

export function CreateRoomSection({ onRoomCreated }) {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState(8);
  const [region, setRegion] = useState<Region>("Washington_DC");

  async function createNewRoom() {
    onRoomCreated();
    const lobby = await createLobby({ roomName, region, capacity });
    router.push(`/game?roomId=${lobby.roomId}`);
  }

  return (
    <form
      className="bg-gray-700 rounded-lg p-4 flex flex-col gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        createNewRoom();
      }}
    >
      <div className="flex flex-col gap-4">
        <Label>Room Name</Label>
        <Input
          id="roomName"
          required
          name="roomName"
          placeholder="Enter room name"
          type="text"
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <Label>Region</Label>
        <Select
          value={region}
          required
          onValueChange={(value) => {
            setRegion(value as Region);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a region" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Regions</SelectLabel>
              {REGIONS.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-4">
        <Label>Max Players</Label>
        <Slider
          id="maxPlayers"
          minStepsBetweenThumbs={1}
          max={16}
          min={2}
          name="maxPlayers"
          value={[capacity]}
          onValueChange={(capacity) => {
            setCapacity(capacity[0]);
          }}
        />
        <p className="text-gray-300 mt-2">Max Players: {capacity}</p>
      </div>

      <Button type="submit">Create Room</Button>
    </form>
  );
}