<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/pixi.js@5/dist/pixi.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-bootstrap@0.32.1/dist/react-bootstrap.min.js"></script>
  <script crossorigin src="https://unpkg.com/higlass@1.6.6/dist/hglib.min.js"></script>
  
<script>
const hgApi = hglib.viewer(
  document.getElementById('development-demo'),
  'http://higlass.io/api/v1/viewconfs/?d=default',
  {
    bounded: false,
  }
);
</script>