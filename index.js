Vue.component("innerComponent", {
	template: `
		<div>innerComponent</div>
	`,
});

Vue.component("comp", {
	template: `
		<div class="w-100 border border-3 border-primary-subtle rounded p-2">
			<span class="text-secondary fst-italic">컴포넌트</span>
			<hr />
			{{ name }}
			<button @click="changeText" class="btn btn-dark">텍스트 변경</button>
			<innerComponent></innerComponent>
		</div>
	`,
	data() {
		return { name: "component" };
	},
	methods: {
		changeText() {
			this.name = "change text";
		},
	},
});

const title = new Vue({
	el: "#title",
	data: {
		text: {
			name: "Vue.js 배워보기",
		},
	},
});

const comp2 = {
	template: `
		<div class="w-100 border border-3 border-primary-subtle rounded p-2">
			<span class="text-secondary fst-italic">지역 컴포넌트</span>
			<hr />
			{{ name }}
			<button @click="changeText" class="btn btn-dark">텍스트 변경</button>
			<innerComponent></innerComponent>
		</div>
	`,
	data() {
		return { name: "component2" };
	},
	methods: {
		changeText() {
			this.name = "change text";
		},
	},
};

const app = new Vue({
	el: "#app",
	data: {
		text: {
			age: 30,
		},
		inputData: "Default",
		type: "text",
		link: "https://github.com/",
		year: 2023,
		inputText: "텍스트 동기화",
		inputText2: "양방향 텍스트",
		number: 1,
		message: "안녕하세요",
		watchMessage: "안녕하세요",
		updated: "아니오",
		isRed: false,
		isBold: false,
		size: 30,
		show: true,
		showNumber: 1,
		numberForShow: 1,
		showForToggle: false,
		people: [
			{ id: 1, name: "a", age: 21 },
			{ id: 2, name: "b", age: 22 },
			{ id: 3, name: "c", age: 23 },
			{ id: 4, name: "d", age: 24 },
			{ id: 5, name: "e", age: 25 },
		],
	},
	methods: {
		getLink(text) {
			return this.link + text;
		},
		nextYear(greeting) {
			return greeting + "! 내년에는 " + (this.text.age + 1) + "살 입니다.";
		},
		// function 생략 가능
		otherMethod: function () {
			this.nextYear();
		},
		alert() {
			alert("Hi");
		},
		plus() {
			this.year++;
		},
		minus() {
			this.year--;
		},
		submit() {
			document.getElementById("submitText").textContent = document.getElementById("submitId").value;
		},
		updateText(event) {
			this.inputText = event.target.value;
		},
		changeMessage() {
			this.message = "헬로우 월드";
		},
		changeWatchMessage() {
			this.watchMessage = "뷰연습";
		},
		styleUpdate() {
			this.isRed = !this.isRed;
			this.isBold = !this.isBold;
		},
		changeTrueFalse() {
			this.show = !this.show;
		},
		changeNumber() {
			this.showNumber++;
		},
		toggleShow() {
			this.showForToggle = !this.showForToggle;
		},
	},
	computed: {
		reversedMessage() {
			return this.message.split("").reverse().join("");
		},
	},
	watch: {
		watchMessage(newVal, oldVal) {
			console.log(newVal, oldVal);
			this.updated = "네";
		},
	},
	components: {
		comp2: comp2,
	},
});

const another = new Vue({
	el: "#another",
	data: {},
	methods: {
		changeTitle() {
			title.text.name = "제목 변경";
		},
	},
});
