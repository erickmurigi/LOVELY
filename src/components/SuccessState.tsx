const SuccessState = () => {
  return (
    <div className="success-animation text-center px-4">
      <div className="text-8xl mb-6 animate-bounce">
        💖
      </div>
      <h1 className="heading-romantic text-5xl md:text-7xl lg:text-8xl mb-6">
        Yay!!!
      </h1>
      <p className="subtitle-romantic text-xl md:text-2xl max-w-md mx-auto mb-4">
        I knew you'd say yes! You just made me the happiest person in the world.
      </p>
      <p className="text-primary text-lg md:text-xl font-medium">
        I love you so much! 💕
      </p>
      <div className="mt-8 flex justify-center gap-4 text-4xl">
        <span className="animate-pulse">💐</span>
        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>🥰</span>
        <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💌</span>
      </div>
    </div>
  );
};

export default SuccessState;
