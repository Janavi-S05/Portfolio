const Footer = () => {

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © 2024 <span className="text-gradient font-medium">Janavi S</span>. Building and learning along the way.
          </p>
          <p className="font-mono">
            Mostly bug-free😄<span className="text-gradient font-medium">....</span><span className="text-gradient font-medium">Keep Coding!!!</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
