class JobService {
  constructor() {
    this.baseUrl = "/api/jobs"; // Future backend endpoint
    this.mockMode = true; // Toggle for development/production
  }

  /**
   * Get job data by ID from URL parameter
   * @param {string} jobId - Job identifier from URL
   * @returns {Promise<Object|null>} Job data or null if not found
   */
  async getJobById(jobId) {
    try {
      if (this.mockMode) {
        // Mock data mode for development
        return this.getMockJobData(jobId);
      } else {
        // Real API call for production
        const response = await fetch(`${this.baseUrl}/${jobId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
      return null;
    }
  }

  /**
   * Mock data retrieval
   * @param {string} jobId - Job identifier
   * @returns {Promise<Object|null>} Mock job data
   */
  getMockJobData(jobId) {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        const jobData = jobsData[jobId] || null;
        resolve(jobData);
      }, 300);
    });
  }

  /**
   * Get all available jobs
   * @returns {Promise<Array>} List of all jobs
   */
  async getAllJobs() {
    try {
      if (this.mockMode) {
        return Object.values(jobsData);
      } else {
        const response = await fetch(this.baseUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      }
    } catch (error) {
      console.error("Error fetching jobs list:", error);
      return [];
    }
  }

  /**
   * Search jobs by criteria
   * @param {Object} criteria - Search criteria
   * @returns {Promise<Array>} Filtered jobs
   */
  async searchJobs(criteria = {}) {
    const allJobs = await this.getAllJobs();

    return allJobs.filter((job) => {
      if (criteria.department && job.department !== criteria.department) {
        return false;
      }
      if (criteria.type && job.type !== criteria.type) {
        return false;
      }
      if (criteria.status && job.status !== criteria.status) {
        return false;
      }
      if (criteria.keyword) {
        const keyword = criteria.keyword.toLowerCase();
        return (
          job.title.toLowerCase().includes(keyword) ||
          job.job_description.some((desc) =>
            desc.toLowerCase().includes(keyword)
          )
        );
      }
      return true;
    });
  }
}

// Initialize service
const jobService = new JobService();
