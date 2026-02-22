export default function AboutPage() {
  return (
    <div className="px-5 pt-8 flex flex-col gap-6">
      <h1 className="font-montserrat text-h1 font-medium text-black">About me</h1>

      <p className="font-montserrat text-regular text-black">
        Hi, I&apos;m Carolina — architect, designer, and space storyteller.
      </p>

      <p className="font-montserrat text-regular text-black">
        Crafting meaningful spaces in Colombia and beyond.
      </p>

      <p className="font-montserrat text-regular text-black">
        From <span className="text-red">concept to completion</span>, I design thoughtful
        environments that respond to people, place, and purpose.
      </p>

      <p className="font-montserrat text-regular text-black">
        Because great design doesn&apos;t end when the project is finished —{' '}
        <span className="text-red">it evolves with the people who inhabit it.</span>
      </p>
    </div>
  );
}
