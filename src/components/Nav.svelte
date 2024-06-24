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