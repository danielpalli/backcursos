import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
	dayOfWeek: {
		type: String,
		enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	},
	shifts: {
		type: String,
		enum: ['morning', 'afternoon', 'night', 'allDay'],
	},
	startTime: {
		type: Date,
		required: [true, 'Start time is required'],
	},
	endTime: {
		type: Date,
		required: [true, 'End time is required'],
	},
	commission: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Commission',
		required: [true, 'Commission is required'],
	},

},
{
	timestamps: true,
});

export const ScheduleModel = mongoose.model('Schedule', ScheduleSchema);
