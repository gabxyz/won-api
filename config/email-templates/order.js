const subject = "Your order details - Won Games";

const text = `
  Hey <%= user.username %>, thanks for buying at Won Games!
  Here are the details from your order:

  Card Information:

  Card brand: <%= payment.card_brand %>
  Card number: **** **** **** <%= payment.card_last4 %>

  Total: <%= payment.total %>

  Games:

  <% _.forEach(games, function(game) { %>
    <%= game.name %> - Price: $<%= game.price %>
  <% }); %>
`;

const html = `
  <p>Hey <%= user.username %>, thanks for buying at Won Games!</p>
  <p>Here are the details from your order:</p>

  <h3>Card Information</h3>

  <ul>
    <li><strong>Card brand:</strong> <%= payment.card_brand %></li>
    <li><strong>Card number:</strong> **** **** **** <%= payment.card_last4 %></li>
  </ul>

  <h3>Total: <%= payment.total %></h3>

  <hr />

  <h3>Games</h3>
  
  <ul>
    <% _.forEach(games, function(game) { %>
			<li><a href="http://localhost:3000/game/<%= game.slug %>"><%= game.name %></a> - Price: <strong>$<%= Number(game.price).toFixed(2) %></strong></li>
		<% }); %>
  </ul>
`;

module.exports = {
  subject,
  text,
  html,
};
