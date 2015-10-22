<header class="caption">

# Dojo ReactJS

André Filipe Goulart, Desenvolvedor Front-end Submarino.

</header>

<section class="slide cover" id="Cover">

<div>

## React JS

by [André Filipe Goulart](http://afgoulart.com)

![](pictures/cover.jpg)</div>

</section>

<section class="slide">

<div>

## Tópicos que vamos abordar

1.  Conceitos
2.  Anatomia de uma aplicação React
3.  Renderização
4.  Componentes
5.  Props
6.  Estado
7.  Composição
8.  Por que usar React?

</div>

</section>

<section class="slide cover picture">

<div>

## Vamos começar?

![](pictures/cheering_minions.gif)</div>

</section>

<section class="slide cover picture full">

<div>

## Conceitos

![conceitos](pictures/conceitos.jpg)</div>

</section>

<section class="slide">

<div>

## Elementos React

<figure>

> Objetos Javascript que representam elementos html guardados

</figure>

</div>

</section>

<section class="slide">

<div>

## Componentes

<figure>

> São criados pelo desenvoledor. Geralmente partes maiores que possuem uma estrutura e funcionalidades como Header, Footer, Main e Nav.

</figure>

</div>

</section>

<section class="slide">

<div>

## JSX

<figure>

> Técnica para criação dos elementos e componentes React.
> 
> Ex:
> 
> <pre class="language-html" data-lang="HTML">            `<h1>Oi</h1>`</pre>
> 
> Ex:
> 
> <pre class="language-jsx" data-lang="JS">            `React.createElement('h1', null, 'Oi');`</pre>

</figure>

</div>

</section>

<section class="slide">

<div>

## Virtual DOM

<figure>

> A arvore em javascript dos elementos e componetes React.
> 
> O React renderia o Virtual DOM para tornar a inteface do usuário visível.
> 
> O React observa procurando alterações, automaticamente mutando o DOM do browser para corresponder com o virtual DOM.

</figure>

</div>

</section>

<section class="slide shout active full textlight texttop">

<div>

## Anatomia de uma aplicação React

![](pictures/anatomia.jpg)</div>

</section>

<section class="slide shout active full textlight topic">

<div>

## Anatomia de uma aplicação React

![](pictures/thinking-in-react-mock.jpg)</div>

</section>

<section class="slide">

<div>

## Renderização

Aceita dois argumentos "elemento" e "um nó" do DOM

<pre class="language-jsx" data-lang="JSX">        `React.render(` `<img src='http://tinyurl.com/lkevsb9' />,` `document.body``);`</pre>

</div>

</section>

<section class="slide">

<div>

## Componente

Criando um componente

<pre class="language-jsx" data-lang="JSX">        `var MyFigure = React.createClass({` `render: function() {` `return <img src='http://tinyurl.com/lkevsb9' />` `}``});``React.render(<MyFigure />, document.body);`</pre>

</div>

</section>

<section class="slide">

<div>

## Props

Criando um componente com propriedades

<pre class="language-jsx" data-lang="JSX">        `var MyFigure = React.createClass({` `render: function() {` `return (` `<figure>` `<img src={this.props.imageUrl} />` `<figcaption>{this.props.caption} </figcaption>` `</figure>` `)` `}``});``React.render(<MyFigure imageUrl="http://tinyurl.com/lkevsb9" caption="My figure 1" />,` `document.body);`</pre>

</div>

</section>

<section class="slide shout" id="SeeMore">

<div>

## Obrigado

![](pictures/giphy.gif)</div>

</section>