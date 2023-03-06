$(document).ready(function () {
	console.log('document is ready!');

	const waitingListData = [
		{
			gameRating: 3.5,
			players: ['Lynn Tanner', 'Roderick Flich'],
			otherPlayers: ['Sledge Hammer', 'Willie Tanner'],
			waitingTime: 19,
		},
		{
			gameRating: 3.5,
			players: ['Angus MacGyver', 'Hannibal Smith'],
			otherPlayers: ['Michael Knight', 'Fred Decker'],
			waitingTime: 19,
		},
		{
			gameRating: null,
			players: ['Thomas Magnum', 'Roderick Decker'],
			otherPlayers: ['Tony Danza', 'Your Name'],
			waitingTime: 21,
		},
		{
			gameRating: 3.5,
			players: ['Cristian Tanner', 'B.A. Baracus'],
			otherPlayers: ['Capt. Trunk', 'Dori Doreau'],
			waitingTime: 26,
		},
		{
			gameRating: null,
			players: ['Lynn Tanner', 'Roderick Flich'],
			otherPlayers: ['Sledge Hammer', 'Willie Tanner'],
			waitingTime: 19,
		},
		{
			gameRating: null,
			players: ['Angus MacGyver', 'Hannibal Smith'],
			otherPlayers: ['Michael Knight', 'Fred Decker'],
			waitingTime: 19,
		},
		{
			gameRating: null,
			players: ['Thomas Magnum', 'Roderick Decker'],
			otherPlayers: ['Tony Danza', 'Your Name'],
			waitingTime: 21,
		},
		{
			gameRating: null,
			players: ['Cristian Tanner'],
			otherPlayers: ['Capt. Trunk'],
			waitingTime: 26,
		},
	];

	const waitingListDom = waitingListData.map(function (item) {
		return `
			<tr>
				<td class="text-center hidden-xs">
					<img src="/assets/img/racket.svg" alt="alt">
				</td>
				<td class="text-center hidden-xs">
					${
						item.gameRating
							? `<strong>${item.gameRating}</strong>`
							: `<img src="/assets/img/handshake.svg" alt="alt">`
					}
				</td>
				<td>
					${item.players
						.map(function (player) {
							return `<span>${player}</span>`;
						})
						.join('')}
				</td>
				<td>
				${item.otherPlayers
					.map(function (player) {
						return `<span>${player}</span>`;
					})
					.join('')}
				</td>
				<td class="time text-center">
					<strong>${item.waitingTime}</strong> mins
					<button>
						<img src="/assets/img/trash.svg" alt="alt">
					</button>
				</td>
			</tr>
		`;
	});

	$('.s-waiting-list__table table tbody').append(...waitingListDom);

	$('button.s-waiting-list__table__readmore').on('click', function () {
		$('.s-waiting-list__table table').addClass('showAll');
	});
});
