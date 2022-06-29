import "./style.css";

type Email = {
  from: string;
  header: string;
  content: string;
  emailAddress: string;
  img: string;
  read: boolean;
};

type State = {
  emails: Email[];
  emailOnDisplay: Email | null;
};

const state: State = {
  emails: [
    {
      from: "Nico",
      header: "Link to today's video and slides is up!",
      content:
        "Link is up and you know where to find it! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "nico@email.com",
      img: "../assets/nico.JPG",
      read: false,
    },
    {
      from: "Ed",
      header:
        "Congratulations! You have received a free beaver! Your name will now be displayed in the classroom's beaver list!",
      content:
        "Beaver beaver beaver beaver beaver beaver beaver beaver ! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "ed@email.com",
      img: "../assets/ed.JPG",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "../assets/gov.jpg",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "../assets/gov.jpg",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "../assets/gov.jpg",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "../assets/gov.jpg",
      read: false,
    },
    {
      from: "Government",
      header: "Time to pay your tax!",
      content:
        "Pay us now! Pay us now! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci quo et assumenda voluptas blanditiis incidunt quia in, accusamus, qui voluptatem porro. Est reiciendis cum a architecto earum voluptatibus vel atque.",
      emailAddress: "government@email.com",
      img: "../assets/gov.jpg",
      read: false,
    },
  ],
  emailOnDisplay: null,
};

// function renderFiltering() {
//   let inputEl = document.querySelector<HTMLInputElement>(".filter-input");
//   if (!inputEl) return;
//   inputEl.addEventListener("submit", () => {
//     let input: string = inputEl.value;
//     state.emails.filter((email) => {
//       return email.from.includes(input);
//     });
//     render();
//   });
// }

function renderInboxList() {
  let mainSection = document.querySelector("main");
  if (!mainSection) return;
  mainSection.textContent = "";

  let inboxTitle = document.createElement("h1");
  inboxTitle.textContent = "Inbox";

  let emailsList = document.createElement("ul");
  emailsList.className = "emails-list";

  mainSection.append(inboxTitle, emailsList);

  for (let email of state.emails) {
    let emailItem = document.createElement("li");
    emailItem.addEventListener("click", () => {
      state.emailOnDisplay = email;
      email.read = true;
      render();
    });
    if (email.read) {
      emailItem.className = "emails-list__item read";
    } else {
      emailItem.className = "emails-list__item";
    }

    let readIcon = document.createElement("span");
    readIcon.className =
      "emails-list__item__read-icon material-symbols-outlined";
    if (email.read) {
      readIcon.textContent = "mark_email_read";
    } else {
      readIcon.textContent = "mark_email_unread";
    }

    let profilePic = document.createElement("img");
    profilePic.className = "emails-list__item__image";
    profilePic.src = email.img;

    let senderEl = document.createElement("p");
    senderEl.className = "emails-list__item__from";
    senderEl.textContent = email.from;

    let contentEl = document.createElement("p");
    contentEl.className = "emails-list__item__content";
    contentEl.textContent = email.header;

    emailItem.append(readIcon, profilePic, senderEl, contentEl);
    emailsList.append(emailItem);
  }
}

function renderMailItem() {
  let email = state.emailOnDisplay;
  if (!email) return;
  let mainSection = document.querySelector("main");
  if (!mainSection) return;
  mainSection.textContent = "";

  let mailItemSection = document.createElement("section");
  mailItemSection.className = "single-email";

  let backBtn = document.createElement("button");
  backBtn.className = "single-email__button";
  backBtn.textContent = "⬅Back";
  backBtn.addEventListener("click", () => {
    state.emailOnDisplay = null;
    render();
  });

  let senderDivEl = document.createElement("div");
  senderDivEl.className = "single-email__sender-section";

  let senderImgEl = document.createElement("img");
  senderImgEl.className = "single-email__image";
  senderImgEl.src = email.img;

  let senderNameEl = document.createElement("span");
  senderNameEl.className = "single-email__sender";
  senderNameEl.textContent = `${email.from} (${email.emailAddress})`;

  let emailSubjectEl = document.createElement("h1");
  emailSubjectEl.className = "single-email__header";
  emailSubjectEl.textContent = email.header;

  let emailContentEl = document.createElement("p");
  emailContentEl.className = "single-email__content";
  emailContentEl.textContent = email.content;

  senderDivEl.append(senderImgEl, senderNameEl);
  mailItemSection.append(backBtn, senderDivEl, emailSubjectEl, emailContentEl);

  mainSection.append(mailItemSection);
}

function render() {
  renderInboxList();
  renderMailItem();
}

render();
