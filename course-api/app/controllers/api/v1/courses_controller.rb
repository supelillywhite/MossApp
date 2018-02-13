module Api::V1
  class CoursesController < ApplicationController
    def index
      @Courses = Course.all
      render json: @Courses
    end
  end
end