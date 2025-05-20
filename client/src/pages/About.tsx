export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen p-6 md:p-10">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-georama mb-8 text-primary">About DeepLure</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>
          
          <p className="mb-6">
            Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-primary">Our Mission</h2>
          
          <p className="mb-6">
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
          </p>
          
          <p className="mb-6">
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4 text-primary">Our Vision</h2>
          
          <p className="mb-6">
            Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum, magna eu placerat blandit, mauris ipsum feugiat libero, sed pharetra eros malesuada sed.
          </p>
          
          <p className="mb-6">
            Suspendisse eu nisl. Nullam ut libero. Integer dignissim consequat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </main>
    </div>
  );
}