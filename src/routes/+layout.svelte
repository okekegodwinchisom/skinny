<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { useTheme } from '@sveltejs/kit/hooks';
  import { ThemeProvider } from '@sveltejs/kit/theme';
  import { CssBaseline } from '@sveltejs/kit/material';
  import { AppBar, Toolbar, Typography, Button, IconButton } from '@sveltejs/kit/material';
  import { Menu as MenuIcon } from '@sveltejs/kit/material-icons';
  import { useMediaQuery } from '@sveltejs/kit/hooks';

  let theme = useTheme();
  let isMobile = useMediaQuery('(max-width: 600px)');

  onMount(() => {
    // Initialize any necessary app-wide logic here
  });
</script>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Skinny Therapy</title>
    <link rel="icon" href="/favicon.ico" />
  </head>

  <body>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {#if isMobile}
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          {/if}
          <Typography variant="h6" style="flex-grow: 1">
            Skinny Therapy
          </Typography>
          {#if $page.url.pathname !== '/'}
            <Button color="inherit" href="/">Home</Button>
          {/if}
          {#if $page.url.pathname !== '/about'}
            <Button color="inherit" href="/about">About</Button>
          {/if}
          {#if $page.url.pathname !== '/contact'}
            <Button color="inherit" href="/contact">Contact</Button>
          {/if}
        </Toolbar>
      </AppBar>

      <main style="padding: 20px; max-width: 1200px; margin: 0 auto;">
        <slot />
      </main>

      <footer style="text-align: center; padding: 20px; background-color: #f5f5f5;">
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Skinny Therapy. All rights reserved.
        </Typography>
      </footer>
    </ThemeProvider>
  </body>
</html>