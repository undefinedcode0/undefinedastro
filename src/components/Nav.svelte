<script>
  export let links = [];
</script>

<nav>
  <ul>
    {#each links as { href, text }}
      <li><a href={href}>{text}</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    background-color: #1f0e06;
    padding: 10px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin: 0 15px;
  }

  nav ul li a {
    color: #f9ef9b;
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    nav ul {
      flex-direction: column;
      align-items: center;
    }

    nav ul li {
      margin: 10px 0;
    }
  }
</style>
