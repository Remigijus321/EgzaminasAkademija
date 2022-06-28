package it.akademija.user;

import it.akademija.role.Role;

public class UserInfo {

	private Role role;
	private String email;
	private String username;

	public UserInfo() {

	}

	public UserInfo(Role role, String username) {
		this.role = role;
		this.username = username;

	}

	public UserInfo(Role role, String username, String email) {
		this.role = role;
		this.username = username;
		this.email = email;
	}

	public UserInfo(User user) {
		super();
		this.role = user.getRole();
		this.email = user.getEmail();
		this.username = user.getUsername();
	}

	/**
	 * Create UserInfo from User
	 *
	 * @param User
	 * @return
	 */
	public static UserInfo from(User user) {
		return new UserInfo(user);
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

}