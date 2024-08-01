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
    background-color: rgba(31, 14, 6, 1);
    padding: 10px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    margin: 0 0.75rem;
  }

  nav ul li a {
    color: #f9e2af;
    text-decoration: none;
    font-weight: bold;
  }
</style>
