import Part from "./Part";

export default function Content({
  part1,
  exercises1,
  part2,
  exercises2,
  part3,
  exercises3,
}) {
  return (
    <div>
      <Part  part={part1} excercises={exercises1} />
      <Part  part={part2} excercises={exercises2} />
      <Part  part={part3} excercises={exercises3} />
    </div>
  );
}
