const firstName = 'Janzzen Matthew';
const lastName = 'De Jesus';
const suffix = 'Mobile Engineer';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
