<script>
  import Nav from "./Nav.svelte";

  const links = [
    { href: "/", text: "Home" },
    { href: "https://github.com/undefinedcode0", text: "GitHub" },
    {
      href: "https://www.youtube.com/channel/UCmMYkdnhCKMODPm3MFlj3_w",
      text: "YouTube",
    },
    { href: "https://x.com/undefinedcode0", text: "Twitter" },
  ];
</script>

<Nav {links} />

<main>
  <slot />
</main>

<footer>
  <p>Made with <span class="heart">&#10084;</span> by undefinedcode.</p>
</footer>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  footer {
    background-color: #1f0e06;
    color: #f9ef9b;
    text-align: center;
    padding: 10px;
    width: 100%;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  }

  .heart {
    text-shadow: 0 0 5px rgba(249, 239, 155, 0.5);
    animation: glow 1.5s infinite alternate;
  }

  /* Scrapped keyframes for the PC to not explode 
  
  @keyframes glow {
    from {
      text-shadow: 0 0 5px rgba(249, 239, 155, 0.5);
    }
    to {
      text-shadow: 0 0 10px rgba(249, 239, 155, 0.7);
    }
  }
  */
</style>
