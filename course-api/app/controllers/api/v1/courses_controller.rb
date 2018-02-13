module Api::V1
  class CoursesController < ApplicationController
    def index
      @courses = Course.all
      render json: @courses
    end

    def create
      @course = Course.create(idea_params)
      render json: @course
    end

    def update
      @course = Course.find(params[:id])
      @course.update_attributes(course_params)
      render json: @course
    end

    def destroy
      @course = Course.find(params[:id])
      if @course.destroy
        head :no_content, status: :ok
      else
        render json: @course.errors, status: :unprocessable_entity
      end
    end

    private

      def course_params
        params.require(:course).permit(:title)
      end
  end
end