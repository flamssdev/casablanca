self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('nome-do-cache').then(function(cache) {
        return cache.addAll([
          '/',
          'index.html',
          '/imagens/2-home/1-home.webp',
          '/imagens/2-home/2-envelhecer.webp',
          '/imagens/2-home/3-rotina.webp',
          '/imagens/2-home/4-equipe.webp',
          '/imagens/2-home/5-logo-top-home.webp',
          '/script/script.js',
          '/styles/0-global.less',
          '/styles/01-header.less',
          '/styles/02-home.less',
          '/styles/03-historia.less',
          '/styles/04-servicos.less',
          '/styles/05-estrutura.less',
          '/styles/06-planos.less',
          '/styles/07-depoimentos.less',
          '/styles/08-contato.less',
          '/styles/09-footer.less',
          '/imagens/8-contato/mapa.webp',
          '/imagens/8-contato/0-titulo.webp',
          '/imagens/7-depoimentos/estrelas.png',
          '/imagens/7-depoimentos/2-estrelas.webp',
          '/imagens/7-depoimentos/3-aspas.webp',
          '/imagens/7-depoimentos/1-pontos.webp',
          '/imagens/7-depoimentos/0-titulo.webp',
          '/imagens/6-planos/mensalidade.webp',
          '/imagens/6-planos/daycare.webp',
          '/imagens/6-planos/0-titulo.webp',
          '/imagens/5-estrutura/1.webp',
          '/imagens/5-estrutura/0-titulo.webp',
          '/imagens/5-estrutura/2.webp',
          '/imagens/5-estrutura/3.webp',
          '/imagens/5-estrutura/4.webp',
          '/imagens/5-estrutura/5.webp',
          '/imagens/5-estrutura/6.webp',
          '/imagens/5-estrutura/7.webp',
          '/imagens/5-estrutura/8.webp',
          '/imagens/5-estrutura/9.webp',
          '/imagens/5-estrutura/10.webp',
          '/imagens/5-estrutura/11.webp',
          '/imagens/5-estrutura/12.webp',
          '/imagens/4-servicos/1.webp',
          '/imagens/4-servicos/0-titulo.webp',
          '/imagens/4-servicos/2.webp',
          '/imagens/4-servicos/3.webp',
          '/imagens/4-servicos/4.webp',
          '/imagens/4-servicos/5.webp',
          '/imagens/4-servicos/6.webp',
          '/imagens/4-servicos/7.webp',
          '/imagens/4-servicos/8.webp',
          '/imagens/4-servicos/9.webp',
          '/imagens/4-servicos/10.webp',
          '/imagens/4-servicos/11.webp',
          '/imagens/4-servicos/12.webp',
          '/imagens/3-historia/0-titulo.webp',
          '/imagens/3-historia/1-lucia.webp',
          '/imagens/1-header/favicon.webp',
          '/imagens/1-header/instagram.webp',
          '/imagens/1-header/logo-idv.webp',
          '/imagens/1-header/logo.webp',
          '/imagens/1-header/wttsapp.webp',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        }
  
        return fetch(event.request).then(function(response) {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
  
          var responseToCache = response.clone();
  
          caches.open('cache-casa-blanca').then(function(cache) {
            cache.put(event.request, responseToCache);
          });
  
          return response;
        });
      })
    );
  });