export const metadata = {
  title: 'About',
  description: 'Our mission is to bring effortless greenery to everyday spaces.'
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-wrap prose max-w-3xl">
        <h1>About EverGreen</h1>
        <p>
          We believe greenery should be joyful ? not a chore. EverGreen crafts premium artificial plants that look and feel real, designed to thrive in every light and lifestyle.
        </p>
        <p>
          From sculptural statement trees to subtle shelf accents, each piece is developed with careful attention to texture, color, and silhouette. Our materials are durable, low?VOC, and made to last.
        </p>
        <h2>Our Promise</h2>
        <ul>
          <li>Timeless design that complements any interior style</li>
          <li>Consistent quality with realistic details</li>
          <li>Hassle?free beauty ? year round</li>
        </ul>
      </div>
    </section>
  );
}
