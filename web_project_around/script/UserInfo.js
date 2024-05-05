export class UserInfo {
  constructor(nameSelector, JobSelector) {
      this._nameElement = document.querySelector(nameSelector)
      this._jobElement = document.querySelector(JobSelector)
  }
  getUserInfo() {
      return {
          name: this._nameElement.textContent,
          job: this._jobElement.textContent
      }
  }
  setUserInfo(name, job) {
      this._nameElement.textContent = name
      this._jobElement.textContent = job
  }
}