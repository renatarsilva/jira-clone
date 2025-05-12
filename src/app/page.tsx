"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const click = () => {
  console.log("Cliquei aqui");
};
export default function Home() {
  return (
    <div className="">
      <Input />
      <Button onClick={click} size="xs">
        Primary
      </Button>
      <Button onClick={click} variant="secondary">
        Secondary
      </Button>
      <Button onClick={click} variant="destructive">
        Destructive
      </Button>
      <Button onClick={click} variant="ghost">
        Ghost
      </Button>
      <Button onClick={click} variant="muted">
        muted
      </Button>
      <Button onClick={click} variant="outline">
        Outline
      </Button>
      <Button onClick={click} variant="teritary">
        Teritary
      </Button>
    </div>
  );
}
