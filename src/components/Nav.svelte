<script>
  export let links = [];
</script>

<nav class="tui-nav">
  <ul class="tui-nav-list">
    {#each links as { href, text }}
      <li class="tui-nav-item"><a href={href}>{text}</a></li>
    {/each}
  </ul>
</nav>

<style>
  .tui-nav {
    background-color: var(--secondary-color);
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid var(--primary-color);
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: 'DM Mono', monospace;
    color: var(--primary-color);
  }

  .tui-nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tui-nav-item {
    margin: 0 0.75rem;
  }

  .tui-nav-item a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;
  }

  .tui-nav-item a:hover {
    border-bottom: 2px solid var(--primary-color);
  }
</style>
