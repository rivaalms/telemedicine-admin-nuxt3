declare namespace Model {
   module LogsReport {
      type UserActivity = {
         objectId?: string | null
         uid?: string | null
         email?: string | null
         user_type?: string | null
         activity?: string | null
         updated_at?: Model.LogsReport.UpdatedAt | null
         medical_facility_id?: number | null
         createdAt?: string | null
         updatedAt?: string | null
      }

      type Consultation = {
         objectId?: string | null
         consultation_id?: number | null
         patient_email?: string | null
         doctor_email?: string | null
         last_updated?: string | null
         status?: string | null
         updated_at?: Model.LogsReport.UpdatedAt | null
         medical_facility_id?: number | null
         createdAt?: string | null
         updatedAt?: string | null
      }

      type UpdatedAt = {
         __type?: string | null
         iso?: string | null
      }
   }
}