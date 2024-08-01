<script>
  import Nav from "./Nav.svelte";

  const links = [
    { href: "/", text: "Home" },
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
    padding: 1rem;
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
</style>
