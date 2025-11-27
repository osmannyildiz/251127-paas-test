export default function About() {
  return (
    <div className="text-center pt-12">
      <h1 className="text-4xl font-semibold">About</h1>
      <div className="grid grid-cols-2 gap-16 mt-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is to provide the best PaaS platform for our customers.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            sapiente eligendi sit sed ipsam, libero doloremque expedita
            laudantium hic laboriosam molestias omnis vel dolorum fugiat odit
            velit dicta ab? Perspiciatis?
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p>
            Our vision is to be the best PaaS platform in the world. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ex atque cum
            ullam odit, molestiae numquam dolore iure dignissimos aliquid
            similique esse deserunt, vel perferendis quam provident praesentium,
            consectetur maiores mollitia!
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8">Deployed on:</h2>
      <ul className="list-disc list-inside">
        <li>Vercel</li>
      </ul>
    </div>
  );
}
